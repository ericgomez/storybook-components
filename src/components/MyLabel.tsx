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

  /**
   * This a font color of the label
   */
  fontColor?: string;

  /**
   * This a background color of the label
   */
  backgroundColor?: string;
}

export const MyLabel = ({
  label = 'No Label',
  size = 'normal',
  color,
  allCap,
  fontColor,
  backgroundColor = 'transparent',
}: MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color}`} style={{ color: fontColor, backgroundColor }}>
      {allCap ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;
