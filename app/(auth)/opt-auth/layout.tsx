import React from 'react'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
            <body
                className={` bg-auth-primary flex items-center min-h-screen lg:px-6 px-2`}
            >
                <div className='w-full mx-auto bg-auth-secondary px-6 flex items-center min-h-[97dvh]  rounded-[20px]'>
                    <div className='max-w-[462px] w-full mx-auto'>
                        {children}
                    </div>
                </div>
            </body>
        </html>
  );
}