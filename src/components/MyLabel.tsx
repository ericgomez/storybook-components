import './my-label.css';

export interface MyLabelProps {
  /**
   * This a message to display in the label
   */
  label: string;
  /**
   * This a size of the label
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';

  /**
   * This a color of the label
   * @default primary
   */
  color: 'primary' | 'secondary' | 'tertiary';

  /**
   * This capitalization of the label
   * @default false
   */
  allCap: boolean;
}

export const MyLabel = ({ label = 'No Label', size = 'normal', color, allCap }: MyLabelProps) => {
  return <span className={`${size} text-${color}`}>{allCap ? label.toUpperCase() : label}</span>;
};
