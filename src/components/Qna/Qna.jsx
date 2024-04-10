const Qna = () => {
  return (
    <div className="space-y-2 mt-3">
      <div className="collapse collapse-arrow border shadow-sm rounded-md">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium text-green-500">
          How does it work ?
        </div>
        <div className="collapse-content">
          <p>
            Luxury real estate operates similarly to the broader real estate
            market but with a focus on high-end properties that offer
            exceptional quality, exclusivity, and amenities.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow border shadow-sm rounded-md">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium text-green-500">
          Do I need a designer to use Luxinesy ?
        </div>
        <div className="collapse-content">
          <p>
            Luxinesy is a fictional name, and I assume you're referring to a
            platform or service related to luxury real estate. Whether you need
            a designer to use such a platform depends on its features and your
            specific needs
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow border shadow-sm rounded-md">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium text-green-500">
          What happens when I receive an order ?
        </div>
        <div className="collapse-content">
          <p>
            When I receive an order in a business context, regardless of the
            industry, several standard processes typically occur. Here's a
            general overview of what happens:Order Confirmation, Processing,
            Inventory Management, Delivery, Payment Processing, Order
            Fulfillment Confirmation, Customer Support, Feedback Collection etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Qna;
