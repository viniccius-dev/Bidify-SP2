import createEle from "../../../helpers/createElement.js";
import endsAt from "../../../helpers/endsAt.js";

export default function thumbnail(data) {
    const figure = createEle("figure");

    const a = createEle("a");
    a.href = `pages/listing/?id=${data.id}`;
    figure.appendChild(a);

    const img = createEle("img", "rounded w-full object-cover listing-image hover:opacity-90 duration-300 h-44 sm:h-80 md:h-96 xl:h-80 2xl:h-96");
    img.src = data.media[0].url;
    img.alt = data.media[0].alt ? data.media[0].alt : `${data.title} - a bidlify listing`;
    a.appendChild(img);

    const figcaption = createEle("figcaption");
    figure.appendChild(figcaption);

    const h2 = createEle("h2", "font-medium text-sm md:text-base xl:text-lg 2xl:text-xl pt-3 md:pt-4", data.title.length > 35 ? data.title.slice(0, 25) + "..." : data.title);
    figcaption.appendChild(h2);

    const p1 = createEle("p", "text-gray-500 pb-2 xl:pb-3 pt-1 xl:pt-1 font-medium text-xs md:text-sm xl:text-base", "Ends in ");
    const span1 = createEle("span", "time-left", endsAt(data.endsAt));
    p1.appendChild(span1);
    figcaption.appendChild(p1);

    const p2 = createEle("p", "pb-4 md:pb-5 text-xs font-medium md:font-normal sm:text-sm lg:text-base 2xl:text-lg", "Current bid: ");
    const span2 = createEle("span", "current-bid", data.bids.length > 0 ? data.bids[data.bids.length - 1].amount + " credits": 0 + " credits");
    p2.appendChild(span2);
    figcaption.appendChild(p2);

    const button = createEle("button", "border rounded w-full py-2 md:py-3 hover:bg-secondary hover:border-secondary text-xs md:text-sm xl:text-base duration-300", "Make an offer");
    figcaption.appendChild(button);

    return figure;
}




