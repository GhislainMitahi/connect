const ServiceOnSignup: React.FC<ServiceOnSignupProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="flex flex-col gap-1 tracking-wide">
      {icon}
      <p className="text-base">{title}</p>
      <p className="text-xs text-custom-gray">{description}</p>
    </div>
  );
};

export default ServiceOnSignup;
