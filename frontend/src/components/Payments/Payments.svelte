<script>
    import Footer from "../Footer/Footer.svelte";

</script>
<div class="min-h-screen py-4 min-w-screen bg-gray-50">
    <div class="px-4">
        <div class="mb-1">
            <a href="#" class="text-sm text-gray-500 focus:outline-none hover:underline"><i class="text-gray-400 mdi mdi-arrow-left"></i>Back</a>
        </div>
        <div class="mb-1">
            <h1 class="text-3xl font-bold text-gray-600 md:text-5xl">Checkout.</h1>
        </div>
        <div class="mb-4 text-gray-400">
            <a href="#" class="text-gray-500 focus:outline-none hover:underline">Home</a> / <a href="#" class="text-gray-500 focus:outline-none hover:underline">Cart</a> / <span class="text-gray-600">Checkout</span>
        </div>
    </div>
    <div class="w-full px-4 text-gray-800 bg-white border-t border-b border-gray-200 py-9">
        <div class="w-full">
            <div class="items-start -mx-3 md:flex">
                <div class="px-3 md:w-7/12 lg:pr-10">
                    <div class="w-full pb-6 mx-auto mb-6 font-light text-gray-800 border-b border-gray-200">
                        <div class="flex items-center w-full">
                            <div class="w-16 h-16 overflow-hidden border border-gray-200 rounded-lg bg-gray-50">
                                <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="">
                            </div>
                            <div class="flex-grow pl-3">
                                <h6 class="font-semibold text-gray-600 uppercase">Ray Ban Sunglasses.</h6>
                                <p class="text-gray-400">x 1</p>
                            </div>
                            <div>
                                <span class="text-xl font-semibold text-gray-600">$210</span><span class="text-sm font-semibold text-gray-600">.00</span>
                            </div>
                        </div>
                    </div>
                    <div class="pb-6 mb-6 border-b border-gray-200">
                        <div class="flex items-end justify-end -mx-2">
                            <div class="flex-grow px-2 lg:max-w-xs">
                                <label class="mb-2 ml-1 text-sm font-semibold text-gray-600">Discount code</label>
                                <div>
                                    <input class="w-full px-3 py-2 transition-colors border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500" placeholder="XXXXXX" type="text"/>
                                </div>
                            </div>
                            <div class="px-2">
                                <button class="block w-full max-w-xs px-5 py-2 mx-auto font-semibold text-white bg-gray-400 border border-transparent rounded-md hover:bg-gray-500 focus:bg-gray-500">APPLY</button>
                            </div>
                        </div>
                    </div>
                    <div class="pb-6 mb-6 text-gray-800 border-b border-gray-200">
                        <div class="flex items-center w-full mb-3">
                            <div class="flex-grow">
                                <span class="text-gray-600">Subtotal</span>
                            </div>
                            <div class="pl-3">
                                <span class="font-semibold">$190.91</span>
                            </div>
                        </div>
                        <div class="flex items-center w-full">
                            <div class="flex-grow">
                                <span class="text-gray-600">Taxes (GST)</span>
                            </div>
                            <div class="pl-3">
                                <span class="font-semibold">$19.09</span>
                            </div>
                        </div>
                    </div>
                    <div class="pb-6 mb-6 text-xl text-gray-800 border-b border-gray-200 md:border-none">
                        <div class="flex items-center w-full">
                            <div class="flex-grow">
                                <span class="text-gray-600">Total</span>
                            </div>
                            <div class="pl-3">
                                <span class="text-sm font-semibold text-gray-400">AUD</span> <span class="font-semibold">$210.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="px-3 md:w-5/12">
                    <div class="w-full p-3 mx-auto mb-6 font-light text-gray-800 bg-white border border-gray-200 rounded-lg">
                        <div class="flex items-center w-full mb-3">
                            <div class="w-32">
                                <span class="font-semibold text-gray-600">Contact</span>
                            </div>
                            <div class="flex-grow pl-3">
                                <span>Scott Windon</span>
                            </div>
                        </div>
                        <div class="flex items-center w-full">
                            <div class="w-32">
                                <span class="font-semibold text-gray-600">Billing Address</span>
                            </div>
                            <div class="flex-grow pl-3">
                                <span>123 George Street, Sydney, NSW 2000 Australia</span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full mx-auto mb-6 font-light text-gray-800 bg-white border border-gray-200 rounded-lg">
                        <div class="w-full p-3 border-b border-gray-200">
                            <div class="mb-5">
                                <label for="type1" class="flex items-center cursor-pointer">
                                    <input type="radio" class="w-5 h-5 text-indigo-500 form-radio" name="type" id="type1" checked>
                                    <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" class="h-6 ml-3">
                                </label>
                            </div>
                            <div>
                                <div class="mb-3">
                                    <label class="mb-2 ml-1 text-sm font-semibold text-gray-600">Name on card</label>
                                    <div>
                                        <input class="w-full px-3 py-2 mb-1 transition-colors border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500" placeholder="John Smith" type="text"/>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="mb-2 ml-1 text-sm font-semibold text-gray-600">Card number</label>
                                    <div>
                                        <input class="w-full px-3 py-2 mb-1 transition-colors border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500" placeholder="0000 0000 0000 0000" type="text"/>
                                    </div>
                                </div>
                                <div class="flex items-end mb-3 -mx-2">
                                    <div class="w-1/4 px-2">
                                        <label class="mb-2 ml-1 text-sm font-semibold text-gray-600">Expiration date</label>
                                        <div>
                                            <select class="w-full px-3 py-2 mb-1 transition-colors border border-gray-200 rounded-md cursor-pointer form-select focus:outline-none focus:border-indigo-500">
                                                <option value="01">01 - January</option>
                                                <option value="02">02 - February</option>
                                                <option value="03">03 - March</option>
                                                <option value="04">04 - April</option>
                                                <option value="05">05 - May</option>
                                                <option value="06">06 - June</option>
                                                <option value="07">07 - July</option>
                                                <option value="08">08 - August</option>
                                                <option value="09">09 - September</option>
                                                <option value="10">10 - October</option>
                                                <option value="11">11 - November</option>
                                                <option value="12">12 - December</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="w-1/4 px-2">
                                        <select class="w-full px-3 py-2 mb-1 transition-colors border border-gray-200 rounded-md cursor-pointer form-select focus:outline-none focus:border-indigo-500">
                                            <option value="2020">2020</option>
                                            <option value="2021">2021</option>
                                            <option value="2022">2022</option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>
                                            <option value="2025">2025</option>
                                            <option value="2026">2026</option>
                                            <option value="2027">2027</option>
                                            <option value="2028">2028</option>
                                            <option value="2029">2029</option>
                                        </select>
                                    </div>
                                    <div class="w-1/4 px-2">
                                        <label class="mb-2 ml-1 text-sm font-semibold text-gray-600">Security code</label>
                                        <div>
                                            <input class="w-full px-3 py-2 mb-1 transition-colors border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500" placeholder="000" type="text"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full p-3">
                            <label for="type2" class="flex items-center cursor-pointer">
                                <input type="radio" class="w-5 h-5 text-indigo-500 form-radio" name="type" id="type2">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" width="80" class="ml-3"/>
                            </label>
                        </div>
                    </div>
                    <div>
                        <button class="block w-full max-w-xs px-3 py-2 mx-auto font-semibold text-white bg-indigo-500 rounded-lg hover:bg-indigo-700 focus:bg-indigo-700"><i class="mr-1 mdi mdi-lock-outline"></i> PAY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="p-5">
        <Footer />
    </div>
</div>

<!-- BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES -->
