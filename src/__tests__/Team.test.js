import Bowerman from '../js/Bowerman';
import Daemon from '../js/Daemon';
import Magician from '../js/Magician';
import Team from '../js/Team';

test('check itarate work', () => {
  const bow = new Bowerman('Ivi');
  const dae = new Daemon('ivi');
  const mag = new Magician('ivi');
  const team = new Team(bow, dae, mag);
  const expected = [bow, dae, mag];
  const recived = [];
  for (const player of team) {
    recived.push(player);
  }
  expect(recived).toEqual(expected);
});
