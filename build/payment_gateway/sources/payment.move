module 0x372c022bf9336c39fc4a125ed038b51f130e816379cf0154930e23e694260cf2::payment {
    use std::signer;
    use aptos_framework::coin;
    use aptos_framework::aptos_coin::AptosCoin;

    struct PaymentRecord has key {
        amount: u64,
    }

    public entry fun initiate_payment(payer: &signer, amount: u64) {
        let payer_addr = signer::address_of(payer);
        
        // Check if the payer has enough balance
        assert!(coin::balance<AptosCoin>(payer_addr) >= amount, 1);

        // Transfer the payment to the module (you might want to change this to transfer to a specific recipient)
        coin::transfer<AptosCoin>(payer, @0x372c022bf9336c39fc4a125ed038b51f130e816379cf0154930e23e694260cf2, amount);

        // Create a payment record
        move_to(payer, PaymentRecord { amount });
    }

    #[view]
    public fun get_payment_amount(addr: address): u64 acquires PaymentRecord {
        borrow_global<PaymentRecord>(addr).amount
    }
}