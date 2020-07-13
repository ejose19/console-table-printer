import { printTableAndGetConsoleOutput } from '../../src/internalTable/internal-table-printer';
import { Table } from '../../index';

describe('Example: Print a simple Table with column colors', () => {
  it('column colors are working', () => {
    // Create a table
    const p = new Table({
      style: {
        /*
            Style2: fatBorder
            ╔══════╦═════╦══════╗
            ║ hob  ║ foo ║ mia  ║
            ╟══════╬═════╬══════╢
            ║ ball ║ fox ║ mama ║
            ╚══════╩═════╩══════╝
            */
        headerTop: {
          left: '╔',
          mid: '╦',
          right: '╗',
          other: '═',
        },
        headerBottom: {
          left: '╟',
          mid: '╬',
          right: '╢',
          other: '═',
        },
        tableBottom: {
          left: '╚',
          mid: '╩',
          right: '╝',
          other: '═',
        },
        vertical: '║',
      },
      columns: [
        { name: 'index', alignment: 'left' },
        { name: 'text', alignment: 'right' },
        { name: 'value' },
      ],
    });

    // add rows with color
    p.addRow(
      { index: 1, text: 'I would like some red wine please', value: 10.212 },
      { color: 'red' }
    );
    p.addRow(
      { index: 2, text: 'I would like some green gemuse please', value: 20.0 },
      { color: 'green' }
    );
    p.addRow(
      { index: 3, text: 'I would like some gelb bananen bitte', value: 100 },
      { color: 'yellow' }
    );

    // print
    const returned = printTableAndGetConsoleOutput(p.table);

    const expected = [
      '╔═══════╦═══════════════════════════════════════╦════════╗',
      '\u001b[37m║\u001b[0m\u001b[37m \u001b[0m\u001b[01mindex\u001b[0m\u001b[37m ║\u001b[0m\u001b[37m \u001b[0m\u001b[01m                                 text\u001b[0m\u001b[37m ║\u001b[0m\u001b[37m \u001b[0m\u001b[01m value\u001b[0m\u001b[37m ║\u001b[0m',
      '╟═══════╬═══════════════════════════════════════╬════════╢',
      '\u001b[37m║\u001b[0m\u001b[37m \u001b[0m\u001b[31m1    \u001b[0m\u001b[37m ║\u001b[0m\u001b[37m \u001b[0m\u001b[31m    I would like some red wine please\u001b[0m\u001b[37m ║\u001b[0m\u001b[37m \u001b[0m\u001b[31m10.212\u001b[0m\u001b[37m ║\u001b[0m',
      '\u001b[37m║\u001b[0m\u001b[37m \u001b[0m\u001b[32m2    \u001b[0m\u001b[37m ║\u001b[0m\u001b[37m \u001b[0m\u001b[32mI would like some green gemuse please\u001b[0m\u001b[37m ║\u001b[0m\u001b[37m \u001b[0m\u001b[32m    20\u001b[0m\u001b[37m ║\u001b[0m',
      '\u001b[37m║\u001b[0m\u001b[37m \u001b[0m\u001b[33m3    \u001b[0m\u001b[37m ║\u001b[0m\u001b[37m \u001b[0m\u001b[33m I would like some gelb bananen bitte\u001b[0m\u001b[37m ║\u001b[0m\u001b[37m \u001b[0m\u001b[33m   100\u001b[0m\u001b[37m ║\u001b[0m',
      '╚═══════╩═══════════════════════════════════════╩════════╝',
    ];
    expect(JSON.stringify(returned)).toBe(JSON.stringify(expected));
  });
});
