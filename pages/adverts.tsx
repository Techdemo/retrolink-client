import * as React from 'react';
import WithNavLayout from 'layout/withNav'

const AdvertsPage = () => {
  return (
    <p>advertspage</p>
  )
};

export default AdvertsPage;

AdvertsPage.getLayout = function getLayout(page) {
  return (
    <WithNavLayout>
      {page}
    </WithNavLayout>
  )
};