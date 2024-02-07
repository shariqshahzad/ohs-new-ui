import { Box, Text } from '@takamol/qiwa-design-system/components';
import React from 'react';

const DialogTitle = (props:any) => {
  return (
    <Box pt={[32, 48]} ps={12} pb={48}>
      <Text variant="heading-m" color="business_700" weight="semibold" as="h1" mb={[32, 24]}>
        {{ props.title }}
      </Text>
    </Box>
  );
};

export default DialogTitle;
