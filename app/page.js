/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kF6ZnMfUJil
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div className="min-h-screen bg-gray-800 text-white p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Pepeball Raffle</h1>
        <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md" onClick={undefined}>
          Wallet Connected
        </button>
      </header>
      <div className="grid grid-cols-3 gap-8">
        <div className="bg-gray-700 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Buy Ticket</h2>
          <form>
            <div className="flex flex-col space-y-4">
              <input className="bg-gray-600 p-2 rounded-md" placeholder="Gamer Tag" type="text" />
              <input className="bg-gray-600 p-2 rounded-md" placeholder="Amount" type="text" />
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md" type="submit">
                Buy
              </button>
            </div>
          </form>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">View Participants</h2>
          <div className="overflow-y-auto h-48">
            <ul className="space-y-2">
              <li>Participant 1</li>
              <li>Participant 2</li>
              <li>Participant 3</li>
              <li>Participant 4</li>
              <li>Participant 5</li>
              <li>Participant 6</li>
              <li>Participant 7</li>
              <li>Participant 8</li>
              <li>Participant 9</li>
              <li>Participant 10</li>
              <li>Participant 11</li>
              <li>Participant 12</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Claim Prize</h2>
          <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md w-full">Claim</button>
        </div>
      </div>
    </div>
  )
}