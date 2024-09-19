export default function HomeIcon({ color = 'black' }: { color?: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="mask0_317_11"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="32"
        height="27"
      >
        <path d="M0 0H32V27H0V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_317_11)">
        <path d="M7.57104 14.286L10.396 26.286H21.954L24.714 14.286" stroke={color} />
      </g>
      <mask
        id="mask1_317_11"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="32"
        height="27"
      >
        <path d="M0 0H32V27H0V0Z" fill="white" />
      </mask>
      <g mask="url(#mask1_317_11)">
        <path d="M3 19L15.857 5L29.286 19" stroke={color} />
      </g>
    </svg>
  )
}
