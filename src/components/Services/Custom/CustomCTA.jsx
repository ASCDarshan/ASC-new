import { Container, Button, Card } from "../../../components/common";

const CustomCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <Card className="p-12 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Build Your Custom Solution?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let&apos;s discuss your project requirements and create a solution
              that perfectly matches your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
              >
                Start Your Project
              </Button>
              <Button variant="outline" size="lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
};

export default CustomCTA;
