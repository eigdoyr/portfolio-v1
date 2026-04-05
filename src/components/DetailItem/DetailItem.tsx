interface DetailItemProps {
  label: string;
  value: string;
  className?: string;
}

const DetailItem = ({ label, value, className = "" }: DetailItemProps) => (
  <div className={`detail-item ${className}`.trim()}>
    <span className="label">{label}:</span>
    <span className="value">{value}</span>
  </div>
);

export default DetailItem;
