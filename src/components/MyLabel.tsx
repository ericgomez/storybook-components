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
}

export const MyLabel = ({ label = 'No Label', size = 'normal' }: MyLabelProps) => {
  return <span className={`${size}`}>{label}</span>;
};
