export async function onRequest(context) {
    const {request} = context;
    const {method} = request;
    if(method === "POST") {
        const data = await request.text();
        const number = parseFloat(data);
        if(isNaN(number)) {
            return new Response(`Invalid number:${data}`,{
                status:400
            });
        }
        const square = number*number;
        return new Response(`The square of ${number} is ${square}`,{
            status:200
        });
    } else {
        return new Response(`Method ${method} Not Allowed`,{
            status:405
        });
    }
}