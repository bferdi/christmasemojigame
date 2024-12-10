interface GameLinkProps {
  link: string;
}

export function GameLink({ link }: GameLinkProps) {
  if (!link) return null;

  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-md">
      <p className="text-sm text-gray-600">Share this link with other players:</p>
      <a href={link} className="text-red-500 break-all hover:underline">
        {link}
      </a>
    </div>
  );
}