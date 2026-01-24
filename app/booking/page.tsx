'use client';

import { useForm } from 'react-hook-form';
import './booking.css';
import { useState } from 'react';
import PageTitle from '../components/PageTitle/PageTitle';

export default function Page() {
  const [written, setWritten] = useState({
    firstName: false,
    lastName: false,
    phone: false,
  });
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <PageTitle title={'Booking'} />
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
            Phone:
            <input
              className={written.phone ? 'correct' : ''}
              type="text"
              {...register('phone')}
              onChange={(e) =>
                setWritten({
                  ...written,
                  phone: e.target.value.length > 0,
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
