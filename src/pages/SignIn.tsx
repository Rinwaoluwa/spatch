import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    PageContainer,
    LeftSection,
    LogoWrapper,
    Logo,
    SignupImage,
    RightSection,
    MobileLogoWrapper,
    FormContainer,
    PageTitle,
    FormGroup,
    FieldLabel,
    RequiredMark,
    StyledTextField,
    SubmitButton
} from './styles/SignIn.styles';
import { signInValidationSchema, SignInFormData } from './validation/signin.validation';

const SignIn: React.FC = () => {
    const navigate = useNavigate();
    
    const { control, handleSubmit, formState: { errors } } = useForm<SignInFormData>({
        resolver: yupResolver(signInValidationSchema),
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
    });

    const onSubmit = (data: SignInFormData) => {
        console.log('Form submitted:', data);
        // Here you would typically make an API call to authenticate the user
        navigate('/posts');
    };

    return (
        <PageContainer>
            {/* Left Section with Image */}
            <LeftSection>
                {/* Logo in top-left corner */}
                <LogoWrapper>
                    <Logo src="/spatch-logo.svg" alt="Spatch" />
                </LogoWrapper>
                
                {/* Phone Image */}
                <SignupImage 
                    src="/signup-image.svg" 
                    alt="Spatch App" 
                />
            </LeftSection>

            {/* Right Section with Form */}
            <RightSection>
                {/* Logo for mobile view */}
                <MobileLogoWrapper>
                    <Logo src="/spatch-logo.svg" alt="Spatch" />
                </MobileLogoWrapper>

                <FormContainer>
                    <PageTitle variant="h4">
                        Sign In
                    </PageTitle>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormGroup>
                            <FieldLabel>
                                Email Address<RequiredMark>*</RequiredMark>
                            </FieldLabel>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => (
                                    <StyledTextField
                                        {...field}
                                        fullWidth
                                        placeholder="Enter email address"
                                        type="email"
                                        error={!!errors.email}
                                        helperText={errors.email?.message}
                                    />
                                )}
                            />
                        </FormGroup>

                        <FormGroup>
                            <FieldLabel>
                                Password<RequiredMark>*</RequiredMark>
                            </FieldLabel>
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => (
                                    <StyledTextField
                                        {...field}
                                        fullWidth
                                        placeholder="Enter password"
                                        type="password"
                                        error={!!errors.password}
                                        helperText={errors.password?.message}
                                    />
                                )}
                            />
                        </FormGroup>

                        <SubmitButton
                            fullWidth
                            type="submit"
                            variant="contained"
                        >
                            Sign In
                        </SubmitButton>
                    </form>
                </FormContainer>
            </RightSection>
        </PageContainer>
    );
};

export default SignIn; 