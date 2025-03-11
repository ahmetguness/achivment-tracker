export interface InputCardProps {
  title: string;
  isPassword?: boolean;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
