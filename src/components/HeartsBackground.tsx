export default function HeartsBackground() {
  return (
    <svg
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      viewBox="0 0 400 700"
      style={{ opacity: 0.2 }}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <symbol id="heart" viewBox="0 0 32 29.6">
        <path
          d="M23.6,0c-2.9,0-5.4,1.7-6.6,4.1C15.8,1.7,13.3,0,10.4,0C4.7,0,0,4.6,0,10.3
                c0,7.2,7.5,12.3,18.1,19.1c0.6,0.4,1.5,0.4,2.1,0C24.5,22.6,32,17.5,32,10.3C32,4.6,27.3,0,23.6,0z"
          fill="#f472b6"
        />
      </symbol>
      
      <use href="#heart" x="20" y="40" width="38" height="38" />
      <use href="#heart" x="310" y="100" width="27" height="27" />
      <use href="#heart" x="220" y="220" width="31" height="31" />
      <use href="#heart" x="70" y="320" width="35" height="35" />
      <use href="#heart" x="170" y="480" width="40" height="40" />
      <use href="#heart" x="300" y="600" width="34" height="34" />
      <use href="#heart" x="125" y="15" width="22" height="22" />
      <use href="#heart" x="380" y="50" width="30" height="30" />
      <use href="#heart" x="55" y="160" width="25" height="25" />
      <use href="#heart" x="250" y="90" width="18" height="18" />
      <use href="#heart" x="360" y="200" width="36" height="36" />
      <use href="#heart" x="15" y="250" width="32" height="32" />
      <use href="#heart" x="150" y="380" width="28" height="28" />
      <use href="#heart" x="280" y="340" width="42" height="42" />
      <use href="#heart" x="390" y="450" width="26" height="26" />
      <use href="#heart" x="40" y="540" width="37" height="37" />
      <use href="#heart" x="200" y="580" width="24" height="24" />
      <use href="#heart" x="350" y="650" width="33" height="33" />
      <use href="#heart" x="95" y="500" width="21" height="21" />
      <use href="#heart" x="330" y="400" width="29" height="29" />
    </svg>
  );
}