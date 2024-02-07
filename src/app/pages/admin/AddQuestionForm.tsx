import React, { useEffect, useState } from 'react';

import { Button, Box, Select } from '@takamol/qiwa-design-system/components';
import { ECONOMICACTIVITY, GETCATEGORY, QUESTION, QUESTIONBYID } from '../../../utils/common/endpoint';
// import { ReactComponent as AlertIcon } from '../../../assets/images/icons/alert-icon.svg';
import { GetRequest, PostRequestProxy, PostRequest, PutRequest } from '../../../app/Components/Axios/axios';
import { useLocale } from 'src/app/translations/hooks/useLocale';
import Success from '../../Components/Modal.Success';
const UPDATE_QUESTION = `UpdateSelfAssessmentQuestion`;
import { FormControl, Container } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Field } from '@takamol/qiwa-design-system/components';
import { styled } from '@mui/system';
export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
  setOpen: any;
  getQuestions: any;
  update: boolean;
  questionData: any;
}
const Title = styled('h1')(({ theme }) => ({
  fontSize: '2rem',
  borderBottom: '2px solid #ddd',
  marginBottom: '0px',
}));
const Root = styled('div')(({ theme }) => ({
  '& .MuiButton-root.MuiButton-containedPrimary': {
    backgroundColor: theme.palette.primary.main,
  },
}));

const DialogCss = styled('div')(({ theme }) => ({
  padding: '100px',
}));
// const useStyles = makeStyles((theme: any) => ({
//   root: {
//     // '& .MuiButton-root.MuiButton-containedPrimary': {
//     //     backgroundColor: '#148287'
//     // },
//   },
//   title: {
//     fontSize: '2rem',
//     borderBottom: '2px solid #ddd',
//     marginBottom: '0px',
//   },
//   dailog: {
//     padding: '100px',
//     // backgroundColor: "red"
//   },
// }));
const AddQuestionComponent = (props: any) => {
  const { t, locale } = useLocale();
  const { onClose, open, update, questionData, options: economicActivities, categories } = props;
  // const classes = useStyles();
  const [selectedEconomicActivites, setSelectedEconomicActivities] = React.useState<any>([]);
  const [ddtest, setddtest] = React.useState<any>([]);
  const [selectedCategory, setSelectedCategory] = React.useState<any>(0);
  const [question, setQuestion] = useState<any>({
    questionEnglish: '',
    questionArabic: '',
    weightage: '',
    category: {
      id: '0',
    },
    eactivity: [],
    status: '',
    version: '0',
    referenceId: '',
  });

  useEffect(() => {
    if (update) {
      const myarray: any = [];
      questionData?.eactivity?.forEach((EA: any) => {
        const data = {
          label: locale == 'en' ? EA.nameEn : EA.name,
          value: EA.eid,
        };
        myarray.push(data);
      });

      setQuestion({
        questionEnglish: questionData?.questionEnglish,
        questionArabic: questionData?.questionArabic,
        weightage: questionData?.weightage,
        category: {
          id: questionData?.category?.id,
        },
        eactivity: questionData?.eactivity,
        status: questionData?.status,
        version: questionData?.version,
        referenceId: questionData?.referenceId,
      });
      setSelectedCategory({
        label: locale == 'en' ? questionData?.category?.categoryNameEn : questionData?.category?.categoryName,
        value: questionData?.category?.id,
      });
      setSelectedEconomicActivities(myarray);
    } else {
      setQuestion({
        questionEnglish: '',
        questionArabic: '',
        weightage: '',
        category: {
          id: '',
        },
        eactivity: [],
      });

      setSelectedEconomicActivities([]);
    }
  }, [update, questionData]);
  // async function getQuestionById(){
  //   const url = `/${QUESTIONBYID}`;
  //   const result = await GetRequest(url);
  //   if (result && result.status === 200) {

  //     // setSelectedOption(result.data[0].economicActivity);
  //   }
  // }

  const handleClose = () => {
    onClose('');
  };
  const handleCategoryChange = (event: any) => {
    setSelectedCategory(event);
  };
  const handleChange = (e: any) => {
    if (e.target.type == 'number') {
      const regex = /^\d{0,6}$/;
      console.log(regex.test(e.target.value));
      if (e.target.value === '' || regex.test(e.target.value)) {
        setQuestion({
          ...question,
          [e.target.name]: e.target.value,
        });
      }
    }

    if (e.target.name == 'economicActivity') {
      setQuestion({
        ...question,
        economicActivity: {
          id: e.target.value,
        },
      });
    }

    if (e.target.name == 'category') {
      setQuestion({
        ...question,
        category: {
          id: e.target.value,
        },
      });
    } else if (e.target.type != 'number') {
      setQuestion({
        ...question,
        [e.target.name]: e.target.value,
      });
    }
  };

  async function handleSubmitQuestion(e: any) {
    e.preventDefault();
    const filteredArr = economicActivities
      .filter((EA: any) => selectedEconomicActivites.some((sEA: any) => EA.id === sEA.value))
      .map((el: any) => ({
        eid: el.id,
        name: el.economicActivity,
        nameEn: el.economicActivityEn,
      }));
    question.eactivity = filteredArr;
    question.category.id = selectedCategory.value;
    if (update) {
      const result = await PostRequestProxy(UPDATE_QUESTION, {
        id: questionData?.id,
        selfAssessmentQuestion: question,
      });
      if (result?.status === 200 || result?.status === 201) {
        props.setOpen(false);
        Success('Question Updated Successfully');
        setQuestion({
          questionEnglish: '',
          questionArabic: '',
          weightage: '',
          category: '0',
          eactivity: [],
        });
        props.getQuestions();
      }
    } else {
      const url = `${QUESTION}`;
      const newQuestions = [];
      newQuestions.push(question);
      //new Question save with APIC-change
      const result = await PostRequestProxy('SaveSelfAssessmentQuestion', { selfAssessmentQuestionList: newQuestions });
      if (result?.data?.SaveSelfAssessmentQuestion?.Header?.ResponseStatus?.Code == '000') {
        // const result = await PostRequest(url, newQuestions);
        // if (result?.status === 200 || result?.status === 201) {
        props.setOpen(false);
        Success('Question Added Successfully');
        setQuestion({
          questionEnglish: '',
          questionArabic: '',
          weightage: '',
          category: '0',
          eactivity: [],
        });
        props.getQuestions();
      }
    }
  }

  const handleChangeEconomicActivity = (event: any) => {
    setSelectedEconomicActivities(event);

    // const myarray: any = [];
    // value.forEach((EA: any) => {
    //   const data = {
    //     eid: EA.id,
    //     name: EA.economicActivity,
    //     nameEn: EA.economicActivityEn,
    //   };
    //   myarray.push(data);
    // });

    // setQuestion({
    //   ...question,
    //   eactivity: myarray,
    // });
  };
  function containsObject(obj: any, list: any) {
    let i;
    for (i = 0; i < list.length; i++) {
      if (list[i] == obj) {
        return true;
      }
    }

    return false;
  }

  return (
    <Container>
      <Dialog
        onClose={handleClose}
        open={open}
        fullWidth={true}
        maxWidth={'md'}
        PaperProps={{
          sx: {
            width: '80%',
          },
        }}
      >
        <DialogCss>
          {/* <DialogTitle color={'#1C5A7D'} className={classes.title}>
          {' '}
          {update ? t('UpdateQuestion') : t('AddQuestion')}
        </DialogTitle> */}
          <DialogTitle color={'#1C5A7D'}>
            {' '}
            <Title>{update ? t('UpdateQuestion') : t('AddQuestion')}</Title>
          </DialogTitle>
          <Field
            id="test"
            label={t('EnterQuestionEnglish')}
            maxInputWidth={[300, 500]}
            type="text"
            onChange={(e) => handleChange(e)}
            placeholder={t('EnterQuestionEnglish')}
          />
          <Field
            id="test"
            label={t('EnterQuestionArabic')}
            maxInputWidth={[300, 500]}
            type="text"
            onChange={(e) => handleChange(e)}
            placeholder={t('EnterQuestionArabic')}
          />

          <Select
            id="select"
            maxInputWidth={['100%', 500]}
            onChange={handleCategoryChange}
            placeholder={t('SelectCategory')}
            label="Category"
            value={selectedCategory}
            options={[
              {
                option: 'Very long option name with many and many words',
                value: 'item a',
              },
              {
                option: 'Item B',
                value: 'item b',
              },
              {
                option: 'Item C',
                value: 'item c',
              },
              {
                option: 'Item D',
                value: 'item d',
              },
              {
                option: 'Item E',
                value: 'item e',
              },
            ]}
            variant="individuals"
          />

          <Select
            id="select"
            maxInputWidth={['100%', 500]}
            onChange={handleChangeEconomicActivity}
            placeholder={t('SelectEconomicActivity')}
            label="SelectEconomicActivity"
            value={selectedEconomicActivites}
            options={[
              {
                option: 'Very long option name with many and many words',
                value: 'item a',
              },
              {
                option: 'Item B',
                value: 'item b',
              },
              {
                option: 'Item C',
                value: 'item c',
              },
              {
                option: 'Item D',
                value: 'item d',
              },
              {
                option: 'Item E',
                value: 'item e',
              },
            ]}
            variant="individuals"
            // id="status-dd"
            // maxInputWidth={['100%', 500]}
            // placeholder={t('SelectEconomicActivity')}
            // name="economicActivity"
            // value={selectedEconomicActivites}
            // onChange={handleChangeEconomicActivity}
            // options={economicActivities.map((eActivity: any) => ({
            //   value: eActivity.id,
            //   label: locale == 'en' ? eActivity.economicActivityEn : eActivity.economicActivity,
            // }))}
          ></Select>
          <Button variant="business_primary_filled"> {update ? t('Update') : t('AddQuestion')}</Button>

          {/* <form onSubmit={(e) => handleSubmitQuestion(e)}>
            <div id="add-question-form-container">
              <input
                id="input-with-icon-textfield"
                placeholder={t('EnterQuestionEnglish')}
                required
                name="questionEnglish"
                value={question?.questionEnglish}
                maxLength={200}
                onChange={(e) => handleChange(e)}
              ></input>
              <input
                id="input-with-icon-textfield"
                placeholder={t('EnterQuestionArabic')}
                required
                name="questionArabic"
                value={question?.questionArabic}
                maxLength={200}
                onChange={(e) => handleChange(e)}
              ></input>

              <Select
                id="status-dd"
                isMulti={true}
                placeholder={t('SelectEconomicActivity')}
                name="economicActivity"
                value={selectedEconomicActivites}
                onChange={handleChangeEconomicActivity}
                options={economicActivities.map((eActivity: any) => ({
                  value: eActivity.id,
                  label: locale == 'en' ? eActivity.economicActivityEn : eActivity.economicActivity,
                }))}
              ></Select>
              <Select
                placeholder={t('SelectCategory')}
                name="category"
                onChange={(e) => handleCategoryChange(e)}
                value={selectedCategory}
                id="status-dd"
                options={categories.map((category: any) => ({
                  value: category.id,
                  label: locale == 'en' ? category.categoryNameEn : category.categoryName,
                }))}
              ></Select>

              <input
                id="input-with-icon-textfield"
                placeholder={t('EnterQuestionweight')}
                type={'number'}
                required
                name="weightage"
                value={question.weightage}
                onCut={(e) => {
                  e.preventDefault();
                }}
                onCopy={(e) => {
                  e.preventDefault();
                }}
                onPaste={(e) => {
                  e.preventDefault();
                }}
                onChange={(e) => handleChange(e)}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              ></input>

              <FormControl fullWidth size="small" className="btndivflx">
                <Button color="primary" type="submit" className="33">
                  {update ? t('Update') : t('AddQuestion')}
                </Button>
              </FormControl>
            </div>
          </form> */}
        </DialogCss>
      </Dialog>
    </Container>
  );
};

export default AddQuestionComponent;
