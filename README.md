# jup-mobile-adapter

Jupiter Mobile adapter on your Solana dApps. Wraps around Reown/WalletConnect appkit adapter, integrates easily to your existing wallet infra.

## Installation

```bash
pnpm add @jup-ag/jup-mobile-adapter
```

## Install Peer dependencies

```json
{
  "next": ">=13",
  "react": ">=18",
  "@reown/appkit": ">=1.6.0",
  "@reown/appkit-adapter-solana": ">=1.6.0",
  "@reown/appkit-wallet-button": ">=1.6.0",
  "@solana/wallet-adapter-base": ">=0.9.0",
  "@solana/web3.js": ">=1.95.0"
}
```

## Usage

```tsx
import { WalletProvider } from '@solana/wallet-adapter-react';
import { useWrappedReownAdapter } from "@jup-ag/jup-mobile-adapter";

const WalletConnectionProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  // Refer to https://reown.com/appkit
  const { reownAdapter, jupiterAdapter } = useWrappedReownAdapter({
    appKitOptions: {
      metadata: {
        name: "",
        description: ``,
        url: "<YOUR_DOMAIN>", // origin must match your domain & subdomain
        icons: [
          // add icons here
        ],
      },
      projectId: "<YOUR_PROJECT_ID>",
      features: {
        analytics: false,
        socials: ["google", "x", "apple"],
        email: false,
      },
      enableWallets: false,
    },
  });

  const wallets = useMemo(
    () => [
      reownAdapter,
      jupiterAdapter,
      // add more wallets here
    ],
    []
  );

  return (
    <WalletProvider wallets={wallets} autoConnect>
      {children}
    </WalletProvider>
  );
};
```
