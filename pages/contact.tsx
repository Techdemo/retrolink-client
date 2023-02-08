import * as React from 'react';
import WithNavLayout from 'layout/withNav'

const ContactPage = () => {
  return (
    <p>contact Page</p>
  )
};

export default ContactPage;

ContactPage.getLayout = function getLayout(page) {
  return (
    <WithNavLayout>
      {page}
    </WithNavLayout>
  )
};