'use client'

import { useEffect, useState } from 'react'
import {
    useAppKitState,
    useAppKitTheme,
    useAppKitEvents,
    useAppKitAccount,
    useWalletInfo
} from '@reown/appkit/react'

export const InfoList = () => {
    const [mounted, setMounted] = useState(false);
    const kitTheme = useAppKitTheme();
    const state = useAppKitState();
    const { address, caipAddress, isConnected, embeddedWalletInfo } = useAppKitAccount();
    const events = useAppKitEvents()
    const walletInfo = useWalletInfo()

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        console.log("Events: ", events);
    }, [events]);

    if (!mounted) return null;

    return (
        <>
            <section>
                <h2>useAppKit</h2>
                <pre>
                    {`Address: ${address || ''}\n`}
                    {`CAIP Address: ${caipAddress || ''}\n`}
                    {`Connected: ${String(!!isConnected)}\n`}
                    {`Account Type: ${embeddedWalletInfo?.accountType || ''}\n`}
                    {embeddedWalletInfo?.user?.email ? `Email: ${embeddedWalletInfo.user.email}\n` : ''}
                    {embeddedWalletInfo?.user?.username ? `Username: ${embeddedWalletInfo.user.username}\n` : ''}
                </pre>
            </section>

            <section>
                <h2>Theme</h2>
                <pre>
                    {`Theme: ${kitTheme?.themeMode || ''}\n`}
                </pre>
            </section>

            <section>
                <h2>State</h2>
                <pre>
                    {`activeChain: ${state?.activeChain || ''}\n`}
                    {`loading: ${String(!!state?.loading)}\n`}
                    {`open: ${String(!!state?.open)}\n`}
                </pre>
            </section>

            <section>
                <h2>WalletInfo</h2>
                <pre>
                    {`Name: ${walletInfo?.walletInfo?.name || ''}\n`}
                </pre>
            </section>
        </>
    )
}