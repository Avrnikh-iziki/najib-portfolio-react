import "./portfolioList.scss";

export default function PortfolioList({animate,  title, active, setSelected }) {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() =>{
         setSelected(title)
         animate()
        }}
    >
      {title}
    </li>
  ); 
}