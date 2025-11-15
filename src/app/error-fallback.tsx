import { useTranslation } from 'react-i18next';
import { useNavigate, useRouteError } from 'react-router';

import { Bug, RefreshCw } from 'lucide-react';

import brokenHeart from '@/assets/error.svg';
import { Button } from '@/components/ui/button';

// Check if the app is in development mode
const isDev = import.meta.env.DEV;

/**
 * Component: DevErrorDetails
 * Shows stack trace and error message in development mode
 */
const DevErrorDetails = ({ error }: { error: Error }) => (
  <div className='mb-6 rounded-md border border-red-200 bg-red-50 p-4 text-base text-red-800 dark:border-red-900 dark:bg-red-900/10 dark:text-red-100'>
    <div className='mb-2 flex items-center gap-2 font-semibold'>
      <Bug className='text-destructive size-4' />
      Development Error Info
    </div>
    <div className='mb-1'>
      <strong>Message:</strong> {error.message}
    </div>
    {error.stack && (
      <pre className='max-h-96 overflow-y-auto rounded bg-red-100 p-2 text-sm wrap-break-word whitespace-pre-wrap dark:bg-red-900/50'>
        {error.stack}
      </pre>
    )}
  </div>
);

/**
 * Component: ErrorActions
 * Renders action buttons like Try Again and Return Home
 */
const ErrorActions = ({
  resetErrorBoundary,
  onNavigateHome,
}: {
  resetErrorBoundary?: () => void;
  onNavigateHome: () => void;
}) => {
  const { t } = useTranslation('error');

  return (
    <div className='flex flex-wrap gap-4'>
      {resetErrorBoundary && (
        <Button variant='destructive' onClick={resetErrorBoundary}>
          {isDev ? 'Try Again' : t('try_again')}
          <RefreshCw className='mr-2 size-4' />
        </Button>
      )}
      <Button variant='outline' onClick={onNavigateHome}>
        {isDev ? 'Return Home' : t('return_home')}
      </Button>
    </div>
  );
};

/**
 * Component: ErrorInfo
 * Reusable UI shared between both environments
 */
const ErrorInfo = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}) => {
  const { t } = useTranslation('error');

  return (
    <>
      <h1 className='mb-2 text-xl font-bold md:text-2xl'>{title}</h1>
      <h2 className='text-muted-foreground mb-4'>{subtitle}</h2>
      {!isDev && <p className='text-muted-foreground/80 mb-1 text-sm'>{t('sub_note')}</p>}
      {children}
    </>
  );
};

/**
 * Component: ErrorFallback
 * Main error boundary fallback component
 */
export const ErrorFallback = ({ resetErrorBoundary }: { resetErrorBoundary?: () => void }) => {
  const { t } = useTranslation('error');

  const error = useRouteError() as Error;
  const navigate = useNavigate();

  // Handle reset error action
  const handleResetError = () => {
    if (resetErrorBoundary) {
      resetErrorBoundary();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className='flex min-h-screen items-center justify-center p-4'>
      <div className='flex w-full max-w-6xl flex-col items-center gap-8 md:flex-row md:gap-12'>
        <div className='flex-1'>
          <ErrorInfo
            title={isDev ? 'Oops! A wild bug appeared!' : t('title')}
            subtitle={
              isDev
                ? 'Something went wrong during development. Check the console or logs for details.'
                : t('subtitle')
            }
          >
            {isDev ? (
              <DevErrorDetails error={error} />
            ) : (
              <div className='mb-8 space-y-4'>
                <p className='text-muted-foreground/80 text-sm'>
                  {t('support_prefix')}{' '}
                  <a className='text-primary hover:underline' href='/contact'>
                    {t('contact_support')}
                  </a>
                  . {t('support_suffix')}{' '}
                  <a className='text-primary hover:underline' href='/help'>
                    {t('help_center')}
                  </a>
                  .
                </p>
              </div>
            )}
            <ErrorActions
              resetErrorBoundary={handleResetError}
              onNavigateHome={() => navigate('/')}
            />
          </ErrorInfo>
        </div>

        {!isDev && (
          <div className='w-full max-w-[250px] md:max-w-[400px]'>
            <img alt={t('image_alt')} className='h-auto w-full' src={brokenHeart} />
          </div>
        )}
      </div>
    </div>
  );
};
