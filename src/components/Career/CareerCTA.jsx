import { useNavigate } from "react-router-dom";
import { Container, Button, Card } from "../../components/common";

const CareerCTA = () => {
  const navigate = useNavigate();
  const handleLearnMore = () => {
    navigate("/about");
  };

  const handlePosition = () => {
    navigate("/careers");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Start Your Journey With Us?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our team of innovators and help us shape the future of
              technology. Explore our open positions and find your perfect role.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
                onClick={handlePosition}
              >
                View Open Positions
              </Button>
              <Button variant="outline" size="lg" onClick={handleLearnMore}>
                Learn More About Us
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
};

export default CareerCTA;
