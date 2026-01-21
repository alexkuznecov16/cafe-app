'use client';

import { useForm } from 'react-hook-form';
import './booking.css';
import { useState } from 'react';

export default function Page() {
  const [written, setWritten] = useState({
    firstName: false,
    lastName: false,
  });
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <h1
        style={{
          fontSize: '48px',
          textAlign: 'center',
          color: '#00c3ff',
          textShadow: `
      0 0 5px #00c3ff,
      0 0 10px #00c3ff,
      0 0 20px #00c3ff,
      0 0 40px #00c3ff
    `,
          margin: '40px 0',
          textTransform: 'uppercase',
        }}
      >
        Booking
      </h1>
      <div className="form__inner">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            First Name:
            <input
              className={written.firstName ? 'correct' : ''}
              type="text"
              {...register('firstName')}
              onChange={(e) =>
                setWritten({
                  ...written,
                  firstName: e.target.value.length > 0,
                })
              }
            />
          </label>

          <label>
            Last Name:
            <input
              className={written.lastName ? 'correct' : ''}
              type="text"
              {...register('lastName')}
              onChange={(e) =>
                setWritten({
                  ...written,
                  lastName: e.target.value.length > 0,
                })
              }
            />
          </label>

          <label>
            Date:
            <input type="date" {...register('dateTime')} />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}
