import Button from './Button';

export default {
    title: 'UI/Button',
    component: Button,
    argTypes: {
        text: {
            type: 'string',
            description: 'Текст кнопки',
            defaultValue: 'В корзину',
        },
        isLoading: {
            type: 'string',
            description: 'Стиль загрузки',
            options: ['loading'],
            control: {
                type: 'boolean',
            }
        }
    }
}

interface ButtonProps {
    text: string,
    isLoading: boolean,
}

const Templates = (args: ButtonProps) => <Button {...args} />

export const Default = (args: ButtonProps) => Templates(args)

Default.args = {
    text: 'В корзину',
    isLoading: false,
}