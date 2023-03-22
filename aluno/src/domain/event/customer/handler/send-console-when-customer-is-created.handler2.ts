import EventHandlerInterface from "../../@shared/event-handler.interface";
import CustomerCreatedEvent from "../../customer/customer-created.event";

export default class SendConsoleWhenCustomerIsCreatedHandler2
  implements EventHandlerInterface<CustomerCreatedEvent>
{
  handle(event: CustomerCreatedEvent): void {
    console.log(`Esse é o segundo console.log do evento CustomerCreated`);
  }
}
