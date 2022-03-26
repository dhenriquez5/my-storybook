import { MyLabel } from "../../components/MyLabel";

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes:{
        size:{control:'select'},
        color:{control:'select'},
        fontColor: { control: 'color' },
    }
}



const Template = (args) => <MyLabel {...args}/>

export const Basic = Template.bind({});
Basic.args={
    label: 'No Label',
    size:'normal',
    allCaps:false,
}

export const AllCaps = Template.bind({});
AllCaps.args={
    allCaps: true,
    size:'normal',
    label: 'Capitalizado',
}

export const Secondary = Template.bind({});
Secondary.args={
    size:'normal',
    label: 'Secondary',
    color:'secondary',
}

export const Tertiary = Template.bind({});
Tertiary.args={
    size:'normal',
    label: 'Tertiary',
    color:'tertiary',
}


export const CustomColor = Template.bind({});
CustomColor.args={
    size:'normalh1',
    label: 'Custom color',
    fontColor:'#000'
}