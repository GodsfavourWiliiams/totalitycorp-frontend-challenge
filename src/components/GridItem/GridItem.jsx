import "./GridItem.css";

const GridItem = ({ itemName, itemUrl, buyUrl }) => {
  return (
    <div className="Grid-item">
      <a href={itemUrl}>
        <img src={require(`../assets/${itemName}.jpg`)} className="Grid-item-image" alt={itemName} />
      </a>
      <div className={`Grid-item-links Grid-item-${itemName}-links`}>
        <a href={itemUrl}>
          Learn More <i className="fa fa-chevron-right"></i>
        </a>
        <a href={buyUrl}>
          {itemName === "applecard" ? "Apply Now " : "Buy "} <i className="fa fa-chevron-right"></i>
        </a>
      </div>
    </div>
  );
};

export default GridItem;
