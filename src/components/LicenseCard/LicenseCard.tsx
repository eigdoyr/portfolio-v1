import { memo } from "react";
import type { LicenseData } from "@/types";
import DetailItem from "@components/DetailItem/DetailItem";

interface LicenseCardProps {
  data: LicenseData;
}

const LicenseCard = memo(({ data }: LicenseCardProps) => (
  <div className="card-wrapper">
    <div className="lanyard-system">
      <div className="lanyard-string" />
      <div className="lanyard-clip" />
      <div className="lanyard-loop" />
    </div>

    <div className="card-bg-layer" />

    <div className="card-container">
      <div className="id-hole" />
      <div className="card-header">Creative License</div>

      <div className="profile-section">
        <img
          src={data.profile.image}
          alt={data.profile.name}
          className="profile-image"
          fetchPriority="high"
        />
        <div className="profile-text">
          <h2>{data.profile.name}</h2>
          <p>{data.profile.title}</p>
        </div>
      </div>

      <div className="details-row">
        <DetailItem label="Location/Time" value={data.location} />
        <div className="signature">Ryodgie RB.</div>
      </div>

      <div className="details-grid">
        <DetailItem label="ID Number" value={data.idNumber} />
        <DetailItem label="Expiration" value={data.expiration} />
      </div>

      <div className="stats-grid">
        {data.stats.map((stat) => (
          <DetailItem key={stat.id} label={stat.label} value={stat.value} />
        ))}
      </div>

      <DetailItem label="Status" value={data.status} className="full-width" />
      <DetailItem
        label="Endorsements"
        value={data.endorsements}
        className="full-width"
      />
    </div>
  </div>
));

LicenseCard.displayName = "LicenseCard";

export default LicenseCard;
