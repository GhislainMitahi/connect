FROM node:20-alpine AS base
ARG SETUP_ENVINROMENT=production


### Dependencies ###
FROM base AS deps
RUN apk add --no-cache libc6-compat git



# Setup npm environment
ENV NPM_HOME="/npm"
ENV PATH="$NPM_HOME:$PATH"
RUN corepack enable
RUN corepack prepare npm@latest --activate

WORKDIR /app

COPY package.json ./
RUN npm install --frozen-lockfile --prefer-frozen-lockfile

# Builder
FROM base AS builder

RUN corepack enable
RUN corepack prepare npm@latest --activate

WORKDIR /app

# Copy the .env{SETUP_ENVINROMENT} file to the container
# This will copy the .env.production.sample -> .env file if the SETUP_ENVINROMENT is production
COPY .env.$SETUP_ENVINROMENT.sample .env

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build


### Production image runner ###
FROM base AS runner

# Set NODE_ENV to production
ENV NODE_ENV production

# Disable Next.js telemetry
# Learn more here: https://nextjs.org/telemetry
ENV NEXT_TELEMETRY_DISABLED 1

# Set correct permissions for nextjs user and don't run as root
RUN addgroup nodejs
RUN adduser -SDH nextjs
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

# Exposed port (for orchestrators and dynamic reverse proxies)
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD [ "wget", "-q0", "http://localhost:3000/health" ]

# Run the nextjs app
CMD ["node", "server.js"]