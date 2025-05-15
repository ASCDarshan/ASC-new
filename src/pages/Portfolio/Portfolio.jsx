import PortfolioSection from "../../components/Portfolio/PortfolioSection";
import PortfolioBanner from "../../components/Portfolio/PortfolioBanner";
import PortfolioStats from "../../components/Portfolio/PortfolioStats";
import PortfolioCTA from "../../components/Portfolio/PortfolioCTA";

const Portfolio = () => {
  return (
    <div>
      <PortfolioBanner />
      <PortfolioSection />
      <PortfolioStats />
      <PortfolioCTA />
    </div>
  );
};

export default Portfolio;
