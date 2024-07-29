const ServiceOnSignup: React.FC<ServiceOnSignupProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="flex flex-col gap-1 tracking-wide md:mb-2">
      {icon}
      <p className="text-base text-white">{title}</p>
      <p className="text-xs text-custom-gray">{description}</p>
    </div>
  );
};

export default ServiceOnSignup;
