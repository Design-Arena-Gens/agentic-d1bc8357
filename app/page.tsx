const SHLOKA = "धृतराष्ट्र उवाच । धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः ।\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ॥ १ ॥";

const TRANSLITERATION =
  "dhr̥tarāṣṭra uvāca | dharmakṣetre kurukṣetre samavetā yuyutsavaḥ | mama kāḥ pāṇḍavāś caiva kim akurvata sañjaya || 1 ||";

const MEANING_ITEMS: Array<{ title: string; description: string }> = [
  {
    title: "धृतराष्ट्र का प्रश्न",
    description:
      "अन्धे राजा धृतराष्ट्र अपने सारथी संजय से पूछते हैं कि धर्मभूमि कुरुक्षेत्र में युद्ध की इच्छा से एकत्र हुए मेरे और पाण्डु के पुत्रों ने क्या किया।"
  },
  {
    title: "संदेह और चिंता",
    description:
      "धृतराष्ट्र को चिंता है कि धर्मभूमि का प्रभाव उनके पुत्रों की बुद्धि को प्रभावित कर युद्ध से विमुख न कर दे और कहीं वे पाण्डवों के साथ समझौता न कर लें।"
  },
  {
    title: "प्रस्तावना",
    description:
      "यह श्लोक पूरे गीता संवाद की प्रस्तावना है, जिसमें धृतराष्ट्र के मन की स्थिति और युद्धभूमि की पृष्ठभूमि स्थापित होती है।"
  }
];

const SOURCE = "भगवद्गीता, अध्याय १, श्लोक १";

export default function Page() {
  return (
    <main>
      <header className="section">
        <h1>{SOURCE}</h1>
        <p className="transliteration">Bhagavad Gita 1.1</p>
      </header>

      <section className="section" aria-labelledby="shloka-heading">
        <h2 id="shloka-heading">मूल श्लोक</h2>
        <p className="devanagari" lang="sa-Deva">
          {SHLOKA.split("\n").map((line, index) => (
            <span key={line + index}>
              {line}
              {index < SHLOKA.split("\n").length - 1 ? <br /> : null}
            </span>
          ))}
        </p>
        <p className="transliteration" lang="sa-Latn">
          {TRANSLITERATION}
        </p>
      </section>

      <section className="section" aria-labelledby="meaning-heading">
        <h2 id="meaning-heading">भावार्थ</h2>
        <ul className="meaning-list">
          {MEANING_ITEMS.map(({ title, description }) => (
            <li key={title}>
              <strong>{title}:</strong> {description}
            </li>
          ))}
        </ul>
      </section>

      <footer className="footer-note" aria-label="footnote">
        यह प्रस्तुति पाठकों के लिए श्लोक का भावपूर्ण अनुभव बनाने हेतु तैयार की गई है।
      </footer>
    </main>
  );
}
