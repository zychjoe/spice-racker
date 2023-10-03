import moment from 'moment';
import './ShelfLifePicker.css';

interface pickerProps {
  shelfLifeDuration: moment.Duration,
  setShelfLifeDuration: React.Dispatch<React.SetStateAction<moment.Duration>>,
}

function ShelfLifePicker (props: pickerProps) {

  const { shelfLifeDuration, setShelfLifeDuration } = props;

  const dayRange = Array.from({length: 30}, (_, i) => i + 1);
  const monthRange = Array.from({length: 12}, (_, i) => i + 1);
  const yearRange = Array.from({length: 10}, (_, i) => i + 1);

  const onSelectChange = (selection: number, period: moment.unitOfTime.DurationConstructor) : void => {
    let newDuration = moment.duration({days: 0, months: 0, years: 0});

    if (shelfLifeDuration) {
      newDuration = shelfLifeDuration;
    }
    
    newDuration.add(selection, period);
    setShelfLifeDuration(newDuration);
    console.log(newDuration);
  }

  return (
    <div>
      <h1>What is the expected shelf life of this spice?</h1>
      <div>
        <p>Days:</p>
        <select  onChange={(e) => onSelectChange(parseInt(e.target.value), 'days')} >
          <option value={0}>0</option>
          {dayRange.map((day, index) => <option key={index} value={day}>{day}</option>)}
        </select>
      <div>
        <p>Months:</p>
        <select  onChange={(e) => onSelectChange(parseInt(e.target.value), 'months')} >
          <option value={0}>0</option>
          {monthRange.map((month, index) => <option key={index} value={month}>{month}</option>)}
        </select>
      </div>
      <div>
        <p>Years:</p>
        <select  onChange={(e) => onSelectChange(parseInt(e.target.value), 'years')} >
          <option value={0}>0</option>
          {yearRange.map((year, index) => <option key={index} value={year}>{year}</option>)}
        </select>
      </div>
      </div>
    </div>
  )

}

export default ShelfLifePicker