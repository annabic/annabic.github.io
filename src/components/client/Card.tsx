interface Props {
  title: string;
  section: string;
  description?: string;
  url?: string;
}

const Card: React.FC<Props> = ({ title, section, description, url }) => {
  return (
    <div className="mb-5 max-w-sm rounded-lg border border-gray-200 bg-white shadow-md">
      <a href={url} className="max-h-30 min-h-20 rounded-t-lg bg-lime-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 250 60"
          width="100%"
          className="rounded-t-lg bg-lime-200 p-4 py-8"
        >
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="26px"
            fill="#333333"
          >
            {title}
          </text>
        </svg>
      </a>
      <div className="p-5">
        <a href={url}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
        </a>
        <p className="mb-3 font-bold text-gray-700">{section}</p>
        <p className="mb-3 font-normal text-gray-700">{description ?? ""}</p>
        <a
          className="inline-flex items-center rounded-lg bg-lime-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-lime-800 focus:ring-4 focus:ring-lime-200"
          href={url}
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default Card;
