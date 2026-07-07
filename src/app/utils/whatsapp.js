export const sendToWhatsApp = (cartItems, customerName, customerPhone) => {
  const phoneNumber = "1234567890" // Replace with your WhatsApp number
  
  let message = `*New Order from Tote It*\n\n`
  message += `Customer: ${customerName}\n`
  message += `Phone: ${customerPhone}\n\n`
  message += `*Order Details:*\n`
  
  let total = 0
  cartItems.forEach((item, index) => {
    message += `\n${index + 1}. ${item.name}\n`
    message += `   Quantity: ${item.quantity}\n`
    message += `   Price: $${item.price} x ${item.quantity} = $${item.price * item.quantity}\n`
    total += item.price * item.quantity
  })
  
  message += `\n*Total Amount: $${total.toFixed(2)}*`
  
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  
  window.open(whatsappUrl, '_blank')
}