
import { Toaster, toast } from "react-hot-toast";
import { Link, useParams } from "react-router-dom";

const PaymentSuccess = () => {
    const { transactionID } = useParams()
    toast.success("payment Successful")
    return (
        <>
            <div className="bg-gray-800 max-w-lg mx-auto p-10 my-40 rounded">
                <Toaster />
                <h1 className="text-green-600">Payment Successful</h1>
                <p>Transaction ID: {transactionID}</p>

                <div className="text-center">
                    <Link to="../home" className="btn  w-64 font-bold rounded mt-10  text-white bg-purple-800 border hover:border-[#830FEA] border-[#830FEA]">Back to Home</Link></div><br />
            </div>
        </>
    );
};

export default PaymentSuccess;