const contacts = [
  {
    id: 1,
    name: 'John Doe',
    lastSeenAt: '2021-06-09T19:07:42',
    phone: '8-925-898-00-23',
  },
  {
    id: 2,
    name: 'Alice Johnson',
    lastSeenAt: null,
    phone: '8-903-694-12-34',
  },
  {
    id: 3,
    name: 'Alice Alison',
    lastSeenAt: null,
    phone: '8-912-854-13-48',
  },
  {
    id: 4,
    name: 'Alice Bobson',
    lastSeenAt: null,
    phone: '8-968-694-22-34',
  },
  {
    id: 5,
    name: 'Denis Albus',
    lastSeenAt: null,
    phone: '8-921-564-21-11',
  },
  {
    id: 6,
    name: 'Gary Vee',
    lastSeenAt: '2021-07-11T05:57:42',
    phone: '8-968-694-00-01',
  },
  {
    id: 7,
    name: 'Bob Marley',
    lastSeenAt: '2021-07-09T12:57:42',
    phone: '8-903-904-90-43',
  },
  {
    id: 8,
    name: 'Freddy Krueger',
    lastSeenAt: '2021-07-12T12:30:45',
    phone: '8-901-001-01-01',
  },
  {
    id: 9,
    name: 'Bob Martin',
    lastSeenAt: '2021-07-11T19:07:42',
    phone: '8-903-694-12-34',
  },
  {
    id: 10,
    name: 'Linus Torwalds',
    lastSeenAt: '2021-07-12T12:08:45',
    phone: '8-911-459-21-56',
  },
  {
    id: 11,
    name: 'Bella Underground',
    lastSeenAt: '2021-07-12T10:08:45',
    phone: '8-963-874-22-11',
  },
  {
    id: 12,
    name: 'Will Smith',
    lastSeenAt: null,
    phone: '8-911-121-11-01',
  },
  {
    id: 13,
    name: 'Arnold Schwarzenegger',
    lastSeenAt: '2021-07-05T10:20:42',
    phone: '8-977-777-67-77',
  },
];

import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
});

for (const { name, lastSeenAt, phone } of contacts) {
  pool
    .query('INSERT INTO contacts ( name, phone, last_seen_at ) VALUES ( $1, $2, $3 );', [
      name,
      phone,
      lastSeenAt,
    ])
    .then((res) => console.log(res.rows));
}
pool.end();
