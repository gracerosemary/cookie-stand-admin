export default function CookieStandFooter({reports}) {
    return (
        <footer className="bg-green-500 w-full border-t text-xl h-screen text-center text-gray-800">
          <p className="p-3">{reports.length} Locations World Wide </p>
        </footer>
    )
}