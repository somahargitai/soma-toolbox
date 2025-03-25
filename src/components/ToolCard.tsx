import React, { useState } from "react";
import { Tool } from "../data/tools";

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="notion-collection-card gallery">
      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="notion-link notion-collection-card__anchor"
      >
        {/* Tool Card Image */}
        <img
          src={imageError ? "/images/tools/placeholder.svg" : tool.image}
          alt={tool.name}
          loading="lazy"
          width="780" 
          height="280"
          className="notion-collection-card__cover medium"
          style={{ 
            color: "transparent", 
            objectFit: "cover", 
            objectPosition: "center 50%"
          }}
          onError={handleImageError}
        />

        {/* Tool Card Content */}
        <div className="notion-collection-card__content notion-collection-card__property-list">
          <div className="notion-property notion-property__title notion-collection-card__property notion-semantic-string">
            {tool.name}
          </div>
          <p className="notion-property notion-property__text property-62436f46 notion-collection-card__property notion-semantic-string">
            {tool.description}
          </p>
        </div>
      </a>
    </div>
  );
};

export default ToolCard;
