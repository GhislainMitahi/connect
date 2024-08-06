interface H1props {
  text: string;
}

interface ServiceOnSignupProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface LanguageTriggerProps {
  className: string;
}

interface menuItems {
  key: number;
  title: string;
  icon: React.ReactElement;
  url: string;
  label?: string;
  isCollapsed: boolean;
  toggleDrawer?: () => void
}

interface menuItems {
  key: number;
  title: string;
  icon: React.ReactElement;
  url: string;
  isCollapsed: boolean;
  disabled?: boolean;
}

type TabPosition = "left" | "right" | "top" | "bottom";

interface profilePropsType {
  image: string;
  name?: string;
  isCollapsed: boolean;
}