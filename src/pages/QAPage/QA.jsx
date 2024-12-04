import "./QA.scss";

export default function QA() {
  return (
    <>
      <div className="qa">
        <div className="qa__question">Is there a dress code?</div>
        <div className="qa__answer">
          Semi-formal attire is preferred. Please reserve white for the bride.
          If you are unsure of whether your attire is appropriate, feel free to
          ask either the bride or groom.
        </div>
        <div className="qa__question">
          Is the wedding held indoors or outdoors?
        </div>
        <div className="qa__answer">
          The ceremony will be held outdoors and the reception will be indoors.
        </div>
        <div className="qa__question">
          How do I get to the wedding venue and where do I park?
        </div>
        <div className="qa__answer">
          Please arrange your own transportation to and from the venue. There
          will be plenty of free parking available on-site.
        </div>
        <div className="qa__question">Are children invited?</div>
        <div className="qa__answer">
          Yes! But only adult entrees are available, please bring any special
          baby food if needed.
        </div>
      </div>
    </>
  );
}
