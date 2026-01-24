'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import './booking.css';
import { useState } from 'react';
import PageTitle from '../components/PageTitle/PageTitle';

type BookingFormData = {
  firstName: string;
  lastName: string;
  phone: string;
  date: string;
};

type WrittenState = {
  firstName: boolean;
  lastName: boolean;
  phone: boolean;
};

export default function Page() {
  const [written, setWritten] = useState<WrittenState>({
    firstName: false,
    lastName: false,
    phone: false,
  });
  const { register, handleSubmit } = useForm<BookingFormData>();

  const onSubmit: SubmitHandler<BookingFormData> = (data) => {
    alert(JSON.stringify(data, null, 2));
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
              {...register('firstName', { required: true })}
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
              {...register('lastName', { required: true })}
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
              type="tel"
              {...register('phone', { required: true })}
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
            <input type="date" {...register('date', { required: true })} />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}
