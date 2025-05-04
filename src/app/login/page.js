export default function Login() {
    return (
        <div className="flex items-center justify-center h-screen w-screen bg-gray-50">
            <button
                className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 border-gray-300 border-2 font-semibold font-poppins text-lg p-4 cursor-pointer"
            >
                <img src="/google.svg" alt="google" className='inline pr-2 size-10' /> Login with Google
            </button>
        </div>
    );
}
