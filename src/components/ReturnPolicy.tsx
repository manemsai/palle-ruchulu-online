import { WHATSAPP_DISPLAY, waLink } from "@/lib/site";

const ReturnPolicy = () => {
  return (
    <section id="returns" className="container mx-auto px-4 pb-16 sm:pb-20 scroll-mt-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="eyebrow mb-3 !justify-center mx-auto">Good to know</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground mb-4">
            Return, Cancellation &amp; Refund Policy
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We at Palle Ruchulu want to delight our customers and make your
            online shopping experience a happy one. We stand behind the quality
            of every jar we ship, and we will support you at all times if
            something goes wrong with your order.
          </p>
        </div>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
              Want to return a product?
            </h3>
            <p>
              A return request can be made by messaging us on WhatsApp at{" "}
              <a
                href={waLink("Hi! I need help with a return for my Palle Ruchulu order.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                {WHATSAPP_DISPLAY}
              </a>{" "}
              within <strong className="text-foreground">2 days of delivery</strong>.
              Products should be returned in their original condition.
            </p>
            <p className="mt-3">Returns will be accepted under the following conditions:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Defective / damaged product</li>
              <li>Wrong product delivered</li>
            </ul>
            <p className="mt-3">Returns will not be accepted under the following conditions:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Returned without original packaging</li>
              <li>Damaged products reported after 2 days</li>
            </ul>
            <p className="mt-3">
              Note — please record and share an unboxing video to claim any
              missing products. The claim should be raised within 24 hours of
              receipt of the product, else refund requests will not be processed.
            </p>
          </div>

          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
              How do I initiate a return, and what happens afterwards?
            </h3>
            <p>
              Message us on WhatsApp at {WHATSAPP_DISPLAY}. Your return request
              will be reviewed by the Palle Ruchulu team. After approval, we
              will take the return of the product at our own cost. Once the
              product is received, it is verified against your claim and your
              refund is initiated.
            </p>
            <p className="mt-3">
              It takes between 1–5 working days from the time a request is
              raised for the product to be delivered back to us. The exact time
              depends on the nature of the product and your location. Please be
              assured that we work very hard to ensure your interests are
              protected.
            </p>
          </div>

          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
              Cancellation by Palle Ruchulu
            </h3>
            <p>
              While we try to ship out every order that has been successfully
              placed with us, there may be some situations in which we may have
              to cancel orders, including (but not limited to):
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Product no longer available or temporarily out of stock</li>
              <li>Limitations on quantities available for purchase</li>
              <li>Inaccuracies or errors in product, pricing or promotion information</li>
              <li>Inaccurate or insufficient address</li>
            </ul>
            <p className="mt-3">
              At times we may also require additional verification or
              information before accepting an order. We will contact you if
              your order has to be cancelled partly or fully, or if any
              additional information is required. If your order is cancelled
              after your payment has been done, the charged amount will be
              refunded to you as soon as possible.
            </p>
          </div>

          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
              Cancellation by the customer
            </h3>
            <p>
              If we receive a cancellation notice from you within 2 hours of
              placing the order and the order has not been processed by us, we
              will cancel the order and refund the amount to you. We will not
              be able to cancel orders that have already been processed and
              shipped.
            </p>
          </div>

          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
              Refunds — when will I get mine?
            </h3>
            <p>
              We initiate the refund within 4–5 working days of receiving the
              product at our centre in case of valid returns. In case of
              cancellations where the product is not shipped, we initiate the
              refund immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReturnPolicy;
