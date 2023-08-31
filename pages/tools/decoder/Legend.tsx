const FIRST_9_CHARS = 'ABCDEFGHI'.split('');
const SECOND_9_CHARS = 'JKLMNOPQR'.split('')
const LAST_CHARS = 'STUVWXYZ!?'.split('');

const CHARS_ARRAYS = [FIRST_9_CHARS, SECOND_9_CHARS, LAST_CHARS];

type LegendProps = {
  handleLetterClick: (letter: string) => void;
}

export default function Legend({ handleLetterClick }: LegendProps) {
  return CHARS_ARRAYS.map((charArr) =>
    <table key={`${charArr.join('')}-table`} className="table-auto" width="300">
      <tbody>
        <tr>
          {charArr.map((letter) => (
            <td key={`alphabet-${letter}`} className="alphabet" width={300 / charArr.length}>
              {letter}
            </td>
          ))}
        </tr>
        <tr>
          {charArr.map((letter) => (
            <td
              key={`lucibet-${letter}`}
              className="lucibet"
              width={300 / charArr.length}
              onClick={() => handleLetterClick(letter)}
            >
              {letter}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}