import { useState } from "react";
import "./ImageWithSkeleton.css";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}

const ImageWithSkeleton = ({
  src,
  alt,
  className = "",
  loading = "lazy",
}: ImageWithSkeletonProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="img-wrapper">
      {/* Skeleton shimmer — hidden once image loads or errors */}
      {!loaded && !error && (
        <div className="img-skeleton skeleton" aria-hidden="true" />
      )}

      {/* Error fallback — clean grey, no broken icon */}
      {error && <div className="img-error" aria-hidden="true" />}

      {/* Image — completely hidden until loaded */}
      {!error && (
        <img
          src={src}
          alt={alt}
          className={`${className} ${loaded ? "img-loaded" : "img-loading"}`}
          loading={loading}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}
    </div>
  );
};

export default ImageWithSkeleton;
